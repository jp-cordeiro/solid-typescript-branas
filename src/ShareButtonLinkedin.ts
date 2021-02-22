import AbstractShareButton from "./AbstractSharedButton";

export default class ShareButtonLinkedin extends AbstractShareButton {
  constructor(clazz: string, url: string) {
    super(clazz, url);
  }

  createLink(): string {
    return `https://www.likedin.com/shareArticle?url=${this.url}`;
  }
}
