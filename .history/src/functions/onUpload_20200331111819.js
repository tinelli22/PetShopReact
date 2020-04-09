
export const onUpload = file => {
   
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = event => resolve(event.target.result)
        reader.onerror = err => reject(err)
    })
}

