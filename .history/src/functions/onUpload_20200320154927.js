
export const onUpload = file => {
    let img = null
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = event => img = event.target.result
    return img
}