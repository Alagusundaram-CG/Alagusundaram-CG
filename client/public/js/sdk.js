class ChennaiGamesSDK {
    constructor(apiBaseUrl) {
      this.apiBaseUrl = apiBaseUrl;
      this.token = null;
    }
  
    // Set authentication token
    setToken(token) {
      this.token = token;
    }
  
    // Check if user is signed in
    isSignedIn() {
      return !!this.token;
    }
  
    // Get user details
    async getUserDetails() {
      if (!this.isSignedIn()) {
        throw new Error("User not signed in");
      }
  
      const response = await fetch(`${this.apiBaseUrl}/user/details`, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to get user details');
      }
  
      return response.json();
    }
  
    // Submit score
    async submitScore(score) {
      if (!this.isSignedIn()) {
        throw new Error("User not signed in");
      }
  
      const response = await fetch(`${this.apiBaseUrl}/score/submit`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ score })
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit score');
      }
  
      return response.json();
    }
  
    // Get leaderboard data
    async getLeaderboard() {
      const response = await fetch(`${this.apiBaseUrl}/leaderboard`);
  
      if (!response.ok) {
        throw new Error('Failed to get leaderboard data');
      }
  
      return response.json();
    }
  }
  
  // Usage example
  const sdk = new ChennaiGamesSDK('https://api.chennaigames.com');
  
  // Set the token after user signs in
  sdk.setToken('user-auth-token');
  
  // Check if user is signed in
  if (sdk.isSignedIn()) {
    // Get user details
    sdk.getUserDetails().then(userDetails => {
      console.log('User Details:', userDetails);
    }).catch(err => console.error(err));
  
    // Submit a score
    sdk.submitScore(100).then(response => {
      console.log('Score submitted:', response);
    }).catch(err => console.error(err));
  
    // Get leaderboard data
    sdk.getLeaderboard().then(leaderboard => {
      console.log('Leaderboard:', leaderboard);
    }).catch(err => console.error(err));
  } else {
    console.log('User not signed in');
  }
  