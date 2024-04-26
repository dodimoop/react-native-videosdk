const API_BASE_URL = 'https://api.videosdk.live/v2';

// export const getToken = async () => {
//   return 'VIDEOSDK_DASHBOARD_TOKEN';
// };
export const getToken = async () => {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjYjFmMTY0Yy0zNjFjLTQ2NTItOWUwZC1mOWEyNDJkZjgzMzgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNDA1OTczOCwiZXhwIjoxNzE0MTQ2MTM4fQ.PUTfNNykwTBLL0Av7cmb0Ou7EfSoWvn74LMWnCCGLRQ"
};

export const createMeeting = async ({token}) => {
  const url = `${API_BASE_URL}/rooms`;
  const options = {
    method: 'POST',
    headers: {Authorization: token, 'Content-Type': 'application/json'},
  };

  const {roomId} = await fetch(url, options)
    .then(response => response.json())
    .catch(error => console.error('error', error));

  console.log('room', roomId);
  return roomId;
};
