# Adding a New Project

This guide explains how to add a new project to the portfolio.

## Quick Start

Add a new object to the `projects.json` array:

```json
{
  "id": "your-project-id",
  "name": "Your Project Name",
  "skills": ["skill1", "skill2"],
  "packages": ["package1", "package2"],
  "description": "A brief description of your project.",
  "slides": ["1.png", "2.png"],
  "githubUrl": "https://github.com/username/repo",
  "blogUrl": "https://myblog.com/blog"
}
```

## Field Reference

| Field         | Required | Description                                                 |
| ------------- | -------- | ----------------------------------------------------------- |
| `id`          | Yes      | Unique identifier (use kebab-case, e.g., `my-cool-project`) |
| `name`        | Yes      | Display name of the project                                 |
| `skills`      | Yes      | Array of skills/technologies used                           |
| `packages`    | Yes      | Array of libraries/packages used                            |
| `description` | Yes      | Brief summary of the project                                |
| `slides`      | Yes      | Array of image filenames for the project slideshow          |
| `githubUrl`   | No       | Link to the GitHub repository                               |
| `blogUrl`     | No       | Link to a related blog post or article                      |

## Adding Project Images

1. Create a folder in `/assets/projects/` with your project's `id` as the name
2. Add your slide images to that folder
3. Reference them in the `slides` array by filename only

**Example:**

```
/public/projects/my-cool-project/
  ├── 1.png
  ├── 2.png
  └── end.png
```

## Example Entry

```json
{
  "id": "sentiment-analysis-app",
  "name": "Sentiment Analysis App",
  "skills": ["Python", "NLP", "machine learning"],
  "packages": ["pandas", "scikit-learn", "nltk"],
  "description": "Built a sentiment classifier that analyzes customer reviews with 92% accuracy.",
  "slides": ["1.png", "2.png", "3.png"],
  "githubUrl": "https://github.com/KaylenTon/sentiment-app",
  "blogUrl": "https://kaylenton.medium.com/sentiment-analysis"
}
```

## Tips

- Keep descriptions concise but informative (1-3 sentences)
- Use consistent naming conventions for slide images
- Make sure image files exist before referencing them
- Each `id` must be unique across all projects
