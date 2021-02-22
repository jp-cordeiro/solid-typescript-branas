import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonPrint from "./ShareButtonPrint";
import AbstractShareButton from "./AbstractShareButton";

const twitter: AbstractShareButton = new ShareButtonTwitter(
  ".btn-twitter",
  "https://www.youtube.com/rodrigobranas"
);
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook(
  ".btn-facebook",
  "https://www.youtube.com/rodrigobranas"
);
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin(
  ".btn-linkedin",
  "https://www.youtube.com/rodrigobranas"
);
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint(".btn-print");
print.bind();
