export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <section class="page-section">
      <figure class="box">
        <img class="contact-img shadow" src="/DSW/SPA/assets/contact.jpg">
      </figure>
      <div class="box">
        <div class="section-text">
          <h2>In doloremque</h2>
          <p>In doloremque nihil eum voluptatem necessitatibus sit 
          debitis rerum ab pariatur maiores sed corporis dicta est 
          autem porro aut voluptatibus quasi? Eum possimus commodi sit nihil 
          magnam sit molestiae debitis eum laboriosam incidunt.!<p>
        </div>
      </div> 
    </section>  
  `

  return container; 
}