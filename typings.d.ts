interface Category {
  _id: string;
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  _type: 'category';
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}
