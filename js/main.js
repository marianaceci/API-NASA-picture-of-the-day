//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=cO8hvoFeYJee1ad926vcvf1Zd5oMFa8CWlnTiKEZ&date=${choice}`


  fetch(url)
      .then(res => res.json()) 
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        } else if (data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

