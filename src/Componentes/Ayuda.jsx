

export default function Ayuda() {
    return (
      <main className=''>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 mx-auto my-5">
              <h2>Cómo utilizar la página</h2>
  
              <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                      Instrucciones
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body ">
                    <p>¡Hola amigo! Para empezar a usar nuestra increíble aplicación de repartición de gastos, simplemente sigue estos sencillos pasos:</p>
                    <p>Desde la página de inicio, solo tienes que darle un toque al botón <strong><code>CALCULAR</code></strong> y así podrás empezar a repartir los gastos. Luego, solo necesitas ingresar el nombre y la cantidad de dinero que aportó cada participante (de ser necesario). Cuando hayas ingresado todos los datos, solo pulsa <strong><code>Calcular</code></strong> para ver los resultados finales y descubrir quién le debe a quién.</p>
                    <p>Si necesitas agregar más participantes, ¡no hay problema! Solo tienes que hacer clic en el botón <strong><code>Agregar</code></strong> y se añadirán más celdas para que todos puedan sumar al gasto total.</p>
                    <p>Pero espera, ¿qué pasa si te emocionas y agregas un registro de más? ¡No te preocupes! Puedes dejarlo vacío o eliminarlo con un simple toque en el botón rojo <strong><code>❌</code></strong>.</p>
                    <p>Y si en algún momento quieres empezar de cero y limpiar todos los registros, solo tienes que presionar el botón <strong><code>limpiar</code></strong> y ¡voilà! Todo estará como al principio.</p>
                     
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Datos en pantalla
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Debajo de los botones se encuenta  <strong><code>Gasto total</code></strong> vas a podes ver, adivina, el total puesto por los participantes y debajo, en <strong><code>Por persona</code></strong>, lo que debe aportar cada uno de los participantes.</p>
                      <p>En <strong><code>Detalle de Pago</code></strong> vas a visualizar quien debe saldar deudas con quien para simplificar los calculos ;).</p>
                    
                    </div>
                  </div>
                </div>
              </div>
  
              <p className="h2 mt-2">Sobre la página</p>
              <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                      Tecnologías empleadas
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                    <div className="accordion-body ">
                      <p>Las tecnologías son las siguientes:</p>
                      <ul>
                        <li>GitHub</li>
                        <li>GitHub Pages</li> 
                        <li>VS Code</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>html2pdf.js</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
  
        </div>
  
      </main>)
  };