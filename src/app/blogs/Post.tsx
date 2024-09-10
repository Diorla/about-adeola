export interface Post {
  id: string;
  title: string;
  description: string;
  published_at: string;
  url: string;
  slug: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  positive_reactions_count: number;
  cover_image: string;
  canonical_url: string;
  reading_time_minutes: number;
  tag_list: string[];
}
