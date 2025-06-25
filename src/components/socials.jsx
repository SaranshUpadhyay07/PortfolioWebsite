import React from 'react';

function Socials() {
  return (
    <div className="fixed-bottom d-flex justify-content-center">
      <div className="social text-white d-flex align-items-center justify-content-center px-3 py-2">
        <a href="https://github.com/SaranshUpadhyay07" className="mx-2 text-white" target="_blank" rel="noreferrer">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/saransh-upadhyay-81702020a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="mx-2 text-white" target="_blank" rel="noreferrer">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a
          href="https://x.com/SaranshUpadhy20"
          className="mx-2 text-white"
          target="_blank"
          rel="noreferrer"
          aria-label="X (Twitter)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 1200 1227"
            fill="currentColor"
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              marginTop: '-2px',
            }}
          >
            <path d="M714.804 545.441L1178.31 0H1071.5L667.551 480.007L336.195 0H0L488.221 706.517L0 1227H106.814L532.449 721.01L882.851 1227H1200L714.804 545.441ZM585.746 650.297L544.82 592.208L179.738 83.2397H296.556L609.347 535.929L650.273 594.018L1040.47 1143.69H923.652L585.746 650.297Z" />
          </svg>
        </a>
        <a
            href="#"
            className="mx-2 text-white"
            onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                window.location.href = 'mailto:saransh.upadhyay07@gmail.com'; // Trigger mail client
            }}
            aria-label="Send Email"
            >
            <ion-icon name="mail-outline"></ion-icon>
        </a>
        <a href="https://www.instagram.com/saransh_upadhyay07/ " target="_blank" className="mx-2 text-white">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </div>
    </div>
  );
}

export default Socials;
