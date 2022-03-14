export default function Post2() {
  return (
    <div className="post">
      <div className="topo">
        <div class="usuario">
          <img src="./assets/barked.svg" />
          barked
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src="./assets/dog.svg" />
      </div>

      <div className="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="./assets/adorable_animals.svg" />
          <div class="texto">
            Curtido por <strong>adorable_animals</strong> e{" "}
            <strong>outras 99.159 pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
