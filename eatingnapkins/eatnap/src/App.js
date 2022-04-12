import logo from './logo.png';
import './App.css';

function read()
{
     var txtFile = new XMLHttpRequest();
     txtFile.open("GET", "https://storageapi2.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/text/firstPageDesc.txt", true);
     txtFile.onreadystatechange = function()
     {
          if (txtFile.readyState === 4)
          {
               // Makes sure the document is ready to parse.
               if (txtFile.status === 200)
               {
                    // Makes sure it's found the file.
                    document.getElementById("desc").innerHTML = txtFile.responseText;
               }
          }
     }
     txtFile.send(null)
}

function App() {
 read()
  return (
    <div>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div className="enEnter">
        <img src={logo} className="EN-logo" alt="logo" />
        <p id="desc">

        </p>
        <div className="enEnterButton">
         <a href="#">Enter The Digital Gallery</a>
        </div>
    </div>
    </div>

  );
}

export default App;
