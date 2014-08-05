function Entry(json) {
  this.title = json["title"];
  this.blogUrl = json["blog_url"];
  this.magazineUrl = json["url"];
  this.schoolSession = json["school_session"];
  this.publishedDate = json["published_date"];
  this.content = json["content"];
  this.jsonUrl = json["_self"];
  if (json["blogger"]) {
    this.blogger = new Blogger(json["blogger"]);
  }
  if (json["tags"]) {
    this.tags = this.addTags(json["tags"]);
  }
}

Entry.prototype.addTags = function(jsonTags) {
  var tags = $.map(jsonTags, function(jsonTag, i) {
    return new Tag(jsonTag);
  });
  return tags;
}