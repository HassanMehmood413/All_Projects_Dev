import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="mainfooter">
        <div className="container">
          <p className="ftitle">Hassan Mehmood</p>
          <p className="fpara">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div class="main-footer__lower">
          &copy; Copyright
          <script>
            document.write(new Date().getFullYear());
          </script>
          . Made by
          <a rel="noreferrer" target="_blank" href="https://HassanMehmood.com"
          >Hassan Mehmood</a>
        </div>
      </div>
    </div >
  )
}
