export default defineEventHandler((event) => {
  return {
    "projects": [
      {
        "name": "My Trello",
        "columns": [
          {
            "name": "To Do",
            "cards": [
              {
                "title": "Create project plan",
                "description": "Outline the main goals and timeline for the project."
              },
              {
                "title": "Research competitors",
                "description": "Analyze competitors' apps and identify key features."
              }
            ]
          },
          {
            "name": "In Progress",
            "cards": [
              {
                "title": "Develop UI/UX design",
                "description": "Create wireframes and prototypes for the app."
              }
            ]
          },
          {
            "name": "Done",
            "cards": [
              {
                "title": "Set up repository",
                "description": "Initialize the project repository on GitHub."
              }
            ]
          }
        ],
        "members": [
          "Naruto",
          "Sai",
          "Sasuke",
          "Sakura",
          "Yamato",
          "Kakashi"
        ]
      },
      {
        "name": "My Life",
        "columns": [],
        "cards": [],
        "members": []
      },
      {
        "name": "My Finances",
        "columns": [],
        "cards": [],
        "members": []
      },
      {
        "name": "My Notes",
        "columns": [],
        "cards": [],
        "members": []
      },
      {
        "name": "My Schedule",
        "columns": [],
        "cards": [],
        "members": []
      }
    ]
  }
})