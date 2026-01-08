import profilePhoto from "../assets/profilePhoto.jpg";

export function Cracha() {

  

  return (
    <div className="cracha-container">
      <div className="cracha">
        <header className="cracha-header">
          <img
            src={profilePhoto}
            alt="Foto de Mariana Rodrigues"
            className="profile-photo"
          />
          <h1>Mariana Rodrigues</h1>
          <p>Desenvolvedora Web</p>
        </header>

        <section className="personal-info">
          <ul>
            <li>
              <img
                className="icon"
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
              />
              Instagram:{" "}
              <a
                href="https://www.instagram.com/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                @seuusuario
              </a>
            </li>

            <li>
              <span className="icon-emoji">🚀</span>
              Sonho: Atuar como desenvolvedora, criando soluções que transformem
              ideias em tecnologia.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
