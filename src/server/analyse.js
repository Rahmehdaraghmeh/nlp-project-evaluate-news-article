const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1";
const axios = require("axios");

const analyze = async (url, key) => {
    try {
        const response = await axios.get(`${meaningCloud}?key=${key}&url=${url}&lang=en`);
        const { status } = response.data;

        if (!status || !status.code) {
            return handleError(500, "Unexpected response from API");
        }

        const { code } = status;

        if (code == 100) {
            return handleError(code, "Please enter a valid URL");
        } else if (code == 212) {
            return handleError(code, status.msg);
        }

        return successResponse(response.data, code);
    } catch (error) {
        return handleError(500, "Error making request to MeaningCloud API");
    }
};

const handleError = (code, msg) => {
    return {
        code: code,
        msg: msg,
    };
};

const successResponse = (data, code) => {
    const { score_tag, agreement, subjectivity, confidence, irony } = data;
    return {
        sample: { score_tag, agreement, subjectivity, confidence, irony },
        status: code,
    };
};

module.exports = { analyze };
