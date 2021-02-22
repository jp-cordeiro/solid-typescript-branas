import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonTwitter from "./ShareButtonTwitter";

const twitter = new ShareButtonTwitter(
  ".btn-twitter",
  "https://www.youtube.com/rodrigobranas"
);
twitter.bind();

const facebook = new ShareButtonFacebook(
  ".btn-facebook",
  "https://www.youtube.com/rodrigobranas"
);
facebook.bind();

const linkedin = new ShareButtonLinkedin(
  ".btn-linkedin",
  "https://www.youtube.com/rodrigobranas"
);
linkedin.bind();
