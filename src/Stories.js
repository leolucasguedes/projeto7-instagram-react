export default function Stories() {
  return (
    <div class="stories">
      <Story imagem="./assets/9gag.svg" usuario="9gag" />
      <Story imagem="./assets/meowed.svg" usuario="meowed" />
      <Story imagem="./assets/barked.svg" usuario="barked" />
      <Story
        imagem="./assets/nathanwpylestrangeplanet.svg"
        usuario="nathanwpylestrangeplanet"
      />
      <Story imagem="./assets/wawawicomics.svg" usuario="wawawicomics" />
      <Story imagem="./assets/respondeai.svg" usuario="respondeai" />
      <Story imagem="./assets/filomoderna.svg" usuario="filomoderna" />
      <Story imagem="./assets/memeriagourmet.svg" usuario="memeriagourmet" />
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} />
      </div>
      <div class="usuario">{props.usuario}</div>
    </div>
  );
}
