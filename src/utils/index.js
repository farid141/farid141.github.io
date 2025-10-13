export function getProjectMedia(folder) {
    // import semua file media dari seluruh public/projects
    const allFiles = import.meta.glob("/src/assets/projects/**/*.{jpg,jpeg,png,mp4,webm}", {
        eager: true,
    })

    // filter sesuai folder yang diminta
    const media = Object.keys(allFiles)
        .filter(path => path.includes(folder))
        .map(path => {
            const ext = path.split(".").pop()
            const type = ext === "mp4" || ext === "webm" ? "video" : "image"
            const src = path.replace("/public", "")
            return { type, src }
        })

    return media
}

export function extractYoutubeId(url) {
    const regex =
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : url;
}