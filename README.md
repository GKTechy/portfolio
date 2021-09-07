

### Avatar and Bio

Your github avatar and bio will be displayed here.\
<br/>
![Avatar Bio](https://arifszn.github.io/assets/img/hosted/ezprofile/avatar-card.png)


## 🚀 Deploy

Once you are done with your setup and have completed all steps above, you need to put your website online! The fastest approach is to use [GitHub Pages](https://pages.github.com) which is completely free.

**1. Github Pages:**
  - Rename your forked repository to <code>username.github.io</code> in github, where <code>username</code> is your GitHub username (or organization name).
  - Open <code>package.json</code>, and change <code>homepage</code>'s value to <code>https://username.github.io</code>.
  
    ```js
    // package.json
    {
      // ...
      "homepage": "https://username.github.io",
    }
    ```

  - Run <code>npm run deploy</code>.
  - If you see only <code>README</code> at <code>username.github.io</code>, be sure to change your GitHub Page's source to <code>gh-pages</code> branch. See [how to](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

    Your personal portfolio will be live at <code>username.github.io</code>. For more info, visit [here](https://create-react-app.dev/docs/deployment/#github-pages).

<br/>
