var btn = document.querySelector('#generate')
var qrcode = document.querySelector('#qrcode')
var expand= document.querySelector('textarea')

expand.addEventListener('click', ()=>{
      expand.row='3'
      expand.clientHeight='50px'
})

btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const text = document.getElementById('text').value;
      if (text) {
        document.getElementById('qrcode').innerHTML = '';
        QRCode.toDataURL(text,function (error, url) {
          if (error) {
            console.error(error);
            return;
          }
          const imgElement = document.createElement('img');
          imgElement.src = url;
          imgElement.alt = 'Generated QR Code';
          imgElement.className='active';
          document.getElementById('qrcode').appendChild(imgElement);
        });
      } else {
        alert('Please enter some text or a URL to generate the QR code.');
      }

})