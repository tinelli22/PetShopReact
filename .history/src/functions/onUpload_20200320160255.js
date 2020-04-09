
export const onUpload = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    return reader.onload = event => event.target.result
}