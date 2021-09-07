<p align="center">
  <a href="http://arifszn.github.io/ezprofile" target="_blank">
    <img src="https://arifszn.github.io/assets/img/hosted/ezprofile/logo.png" alt="ezProfile" title="ezProfile" width="80">
  </a>
</p>

<h1 align="center">ezProfile</h1>
<p align="center">A modern, responsive and customizable portfolio builder for Developers!</p>
<p align="center">https://arifszn.github.io/ezprofile</p>

<br/>

<p align="center">
    <a href="https://arifszn.github.io/ezprofile">
        <img src="https://arifszn.github.io/assets/img/hosted/ezprofile/preview.gif" width="60%" alt="Preview"/>
    </a>
    <br/>
    <a href="#arifszn"><img src="https://arifszn.github.io/assets/img/drop-shadow.png" width="60%" alt="Shadow"/></a>
</p>


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

**2. Other:** You can also host your website to Netlify, Vercel, Heroku, or other popular services. Please refer to this [doc](https://create-react-app.dev/docs/deployment) for a detailed deployment guide.
