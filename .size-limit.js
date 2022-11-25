const shared = { webpack: false, running: false }

module.exports = [
  { path: "dist/vue-treeselect.umd.min.js", limit: "17.0 KB", ...shared },
  { path: "dist/vue-treeselect.min.css", limit: "5 KB", ...shared },
]
