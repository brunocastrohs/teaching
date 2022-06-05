 window.teaser = () => {return alert('Testando funcionalidade!')};

export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <section class="page-section">
      <figure class="box">
        <img class="home-img shadow" src="/DSW/SPA/assets/logo.jpg">
      </figure>
      <div class="box">
        <div class="section-text">
          <h2>Donec Eget</h2>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante 
          ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet 
          dolor mattis sagittis magna etiam!<p>
          <h3>Aenean ornare velit!</h3>
          <p>by Aenean Ornare</p>
          <button onclick='teaser()'> Click</button>
        </div>
      </div> 
    </section>  
  `

  return container; 
}