// Blog data storage
let blogs = [];

// DOM Elements
const latestBlogsDiv = document.getElementById("latest-blogs");
const olderBlogsDiv = document.getElementById("older-blogs");
const blogForm = document.getElementById("blog-form");
const viewOlderBlogsBtn = document.getElementById("view-older-blogs-btn");

// Function to display blogs
function displayBlogs() {
  // Clear the blog sections
  latestBlogsDiv.innerHTML = "";
  olderBlogsDiv.innerHTML = "";

  // Show the latest 3 blogs
  blogs.slice(0, 3).forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.className = "blog";
    blogDiv.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
    `;
    latestBlogsDiv.appendChild(blogDiv);
  });

  // Show older blogs
  blogs.slice(3).forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.className = "blog";
    blogDiv.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
    `;
    olderBlogsDiv.appendChild(blogDiv);
  });
}

// Handle form submission
blogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  // Add new blog to the beginning of the list
  blogs.unshift({ title, content });

  // Clear form fields
  blogForm.reset();

  // Update UI
  displayBlogs();
});

// Toggle older blogs visibility
viewOlderBlogsBtn.addEventListener("click", () => {
  if (olderBlogsDiv.style.display === "none") {
    olderBlogsDiv.style.display = "block";
    viewOlderBlogsBtn.textContent = "Hide Older Blogs";
  } else {
    olderBlogsDiv.style.display = "none";
    viewOlderBlogsBtn.textContent = "View Older Blogs";
  }
});
