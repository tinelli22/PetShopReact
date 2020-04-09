
export const onUpload = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = event => {
        console.log(event)
    }
}