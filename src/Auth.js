const Auth = {
    isAuthenticated: false,
    
    getAuth() { return this.isAuthenticated },
    authenticate() { this.isAuthenticated = true },
    signOut() { this.isAuthenticated = false }
}

export default Auth