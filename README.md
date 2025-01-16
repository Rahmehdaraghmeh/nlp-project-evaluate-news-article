
# News Article Sentiment Analysis

### Description:
This project allows users to evaluate news articles using Natural Language Processing (NLP) through the MeaningCloud API. The app allows users to input a URL of a news article, and it returns the sentiment analysis, including polarity (positive/negative), subjectivity (subjective/factual), and other valuable insights like confidence and irony.

---

## Features:
- Analyze news articles' sentiment using the MeaningCloud API.
- Display results including polarity, subjectivity, confidence, and irony.
- User-friendly interface to submit URLs and view analysis results.
- Service workers enabled for offline functionality.

---

## Installation and Setup:

### 1. Clone the repository:
Clone the repository to your local machine:

```bash
git clone https://github.com/Rahmehdaraghmeh/nlp-project-evaluate-news-article.git
cd <project-directory>
```

### 2. Install dependencies:
Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Set up environment variables:
- Create a `.env` file in the root directory of your project.
- Add your **API Key** from MeaningCloud to the `.env` file:

```env
API_KEY=your_api_key_here
```

You can get your API key from [MeaningCloud](https://www.meaningcloud.com/developer).

### 4. Run the Application:

#### Development Mode:
To run the app in development mode, use:

```bash
npm run dev
```

This will start the Webpack Dev Server and open the app in development mode at `http://localhost:9000`.

#### Production Mode:
To build the app for production:

```bash
npm run build
```

Then, start the app in production mode:

```bash
node server.js
```

The app will run on `http://localhost:8000`.

---

## Dependencies:
- **express**: Web framework for Node.js.
- **axios**: Promise-based HTTP client for making API requests.
- **dotenv**: Loads environment variables from a `.env` file.
- **webpack**: A module bundler to bundle JavaScript files.
- **webpack-dev-server**: Development server to serve the app.
- **sass-loader**, **css-loader**, **style-loader**: Loaders for CSS and SCSS files in Webpack.
- **MiniCssExtractPlugin**: Extracts CSS into separate files for better caching.
- **TerserPlugin**: Minifies JavaScript files for production.

---

## Project Structure:
```
/project-root
  /dist               # Compiled files (excluded from git)
  /node_modules       # Node.js modules (excluded from git)
  /src
    /html             # HTML files
    /js               # JavaScript files
    /scss             # SCSS files
  /server.js          # Backend server and API route handling
  /webpack.common.js  # Common Webpack configuration
  /webpack.dev.js     # Webpack development configuration
  /webpack.prod.js    # Webpack production configuration
  .gitignore          # Git ignore file (node_modules, dist)
  .env                # Environment variables (API Key)
  package.json        # Project metadata and dependencies
  README.md           # Project documentation
```

---

## Notes:
- Ensure the **API Key** from MeaningCloud is set up correctly in the `.env` file.
- For production, Webpack compiles and bundles the app for optimized delivery.
- The app has offline functionality using service workers.
