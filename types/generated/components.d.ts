import type { Schema, Attribute } from '@strapi/strapi';

export interface PostBlogPost extends Schema.Component {
  collectionName: 'components_post_blog_posts';
  info: {
    displayName: 'Blog Post';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String;
    details: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'post.blog-post': PostBlogPost;
    }
  }
}
