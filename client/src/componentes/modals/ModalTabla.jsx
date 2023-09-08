import '../../vistas/dashboard.css';

export default function ModalTabla({ modalAbierto, abrirModal, cerrarModal }){
    return(
        <div
                    className="modal-wrapper"
                    style={{ display: modalAbierto ? 'block' : 'none' }}
                    
                >
                    <div class="modal-content-wrapper">
                        <div id="w-node-b7d62a90-60bc-d1b3-5389-85ab6300ad8e-6300ad8e"
                            class="inner-container _370px">
                            <div class="card pd-24px---18px position-relative---z-index-1">
                                <div
                                    class="_2-items-wrap-container gap-column-8px mg-bottom-4px">
                                    <h3 class="text-200 bold mg-bottom-0">Modal title</h3>
                                    <div
                                        class="close-icon-wrapper floating-icon-top-right " onClick={cerrarModal}>
                                        <div class="close-icon-line first"></div>
                                        <div class="close-icon-line second"></div>
                                    </div>
                                </div>
                                <p class="paso-1">Donec enim lectus elit suspendisse nisi
                                    sodales pretium sed sed etiam amet porttitor urna vel
                                    massa nisl mattis aliquet eu consectetur volutpat.</p>
                                <div>Selecciona la moneda</div>
                                <div class="w-form">
                                    <form id="wf-form-cargar-operacion"
                                        name="wf-form-cargar-operacion"
                                    >
                                        <label class="w-radio"><input type="radio"
                                            id="radio" name="radio" value="Radio"

                                            class="w-form-formradioinput w-radio-input" /><span
                                                class="w-form-label" for="radio">Pesos
                                                argentinos</span></label><label
                                                    class="w-radio"><input type="radio" id="radio-2"
                                                        name="radio" value="Radio"

                                                        class="w-form-formradioinput w-radio-input" /><span
                                                            class="w-form-label" for="radio-2">Dolar
                                                estadounidense</span></label>
                                        <div>Selecciona el tipo de operación</div><label
                                            class="w-radio"><input type="radio" id="radio-3"
                                                name="radio" value="Radio"

                                                class="w-form-formradioinput w-radio-input" /><span
                                                    class="w-form-label"
                                                    for="radio-3">Compra</span></label><label
                                                        class="w-radio"><input type="radio" id="radio-4"
                                                            name="radio" value="Radio"

                                                            class="w-form-formradioinput w-radio-input" /><span
                                                                class="w-form-label"
                                                                for="radio-4">Venta</span></label>
                                        <div>Selecciona el tipo de activo</div><select
                                            id="Tipo-de-activo" name="Tipo-de-activo"
                                            class="w-select">
                                            <option value="">Selecciona una opción</option>
                                            <option value="First">BYMA</option>
                                            <option value="Second">FCI</option>
                                            <option value="Third">ROFEX</option>
                                            <option value="Fourth">CAUCIÓN</option>
                                        </select>
                                        <div>Selecciona el activo</div><select id="field"
                                            name="field" class="w-select">
                                            <option value="">Selecciona una opción</option>
                                            <option value="First">ALUA</option>
                                            <option value="Second">MELI</option>
                                            <option value="Third">YPFD</option>
                                        </select>
                                        <div>Selecciona la cantidad a operar</div><input
                                            type="email" class="w-input" maxlength="256"
                                            name="email" placeholder=""
                                            id="email" required="" />
                                        <div>Selecciona el precio</div><label
                                            class="w-radio"><input type="radio" id="radio-6"
                                                name="radio" value="Radio"

                                                class="w-form-formradioinput w-radio-input" /><span
                                                    class="w-form-label"
                                                    for="radio-6">Mercado</span></label><label
                                                        class="w-radio"><input type="radio" id="radio-5"
                                                            name="radio" value="Radio"

                                                            class="w-form-formradioinput w-radio-input" /><span
                                                                class="w-form-label"
                                                                for="radio-5">Establecer
                                                precio</span></label><input type="text"
                                                    class="w-input" maxlength="256" name="name"
                                                    placeholder="" id="name" />
                                    </form>
                                    <div class="w-form-done">
                                        <div>Thank you! Your submission has been received!
                                        </div>
                                    </div>
                                    <div class="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the
                                            form.</div>
                                    </div>
                                </div>
                                <div class="buttons-row gap-column-12px">
                                    <div ><a

                                        href="#" class="button-popup w-inline-block">
                                        <div class="flex-horizontal gap-column-4px" onClick={cerrarModal}>
                                            <div>Cancel</div>
                                        </div>
                                    </a></div><a

                                        href="#" class="btn-primary w-inline-block">
                                        <div class="flex-horizontal gap-column-4px">
                                            <div>Accept</div><img
                                                src="https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ed71371fdfd6c8427d0cec_primary-button-icon-right-dashflow-webflow-template.svg"
                                                loading="eager" alt=""
                                                class="link-icon arrow-right" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="modal-close-overlay"></div>
                </div>
    )
}