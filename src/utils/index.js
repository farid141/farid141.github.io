export function getProjectMedia(folder) {
    const allFiles = import.meta.glob("/src/assets/projects/**/*.{jpg,jpeg,png,mp4,webm}", {
        eager: true,
    })
    console.log(allFiles)
    //test

    // filter sesuai folder yang diminta
    const media = Object.keys(allFiles)
        .filter(path => path.includes(folder))
        .map(path => {
            const ext = path.split(".").pop()
            const type = ext === "mp4" || ext === "webm" ? "video" : "image"
            // During Vite production build the generated asset paths include the leading
            // `/src` segment when using `import.meta.glob` with absolute patterns.
            // Only strip `/src` in production (build/deploy e.g., GitHub Pages).
            const src = import.meta.env && import.meta.env.PROD
                ? window.location.origin + path.replace("/src/", "")
                : path
            return { type, src }
        })

    console.log(media)

    return media
}

export function extractYoutubeId(url) {
    const regex =
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : url;
}