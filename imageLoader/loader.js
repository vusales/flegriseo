export default function myImageLoader({ src, width, quality }) {
    // return `http://localhost:3002${src}?w=${width}&q=${quality || 75}`
    return `${src}?w=${width}&q=${quality || 75}`
}