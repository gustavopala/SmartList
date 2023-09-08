import '../vistas/dashboard.css'
import { useState } from 'react';
import ModalTabla from './modals/ModalTabla';

export default function Tabla({ dataInversiones }) {
    const [modalAbierto, setModalAbierto] = useState(false);

    // Función para abrir el modal
    const abrirModal = () => {
        setModalAbierto(true);
    };

    // Función para cerrar el modal
    const cerrarModal = () => {
        setModalAbierto(false);
    };
    return (
        /* porque no se hace el cambio? */
        <div class="f-tab-pane .w--tab-active">

            <div id="w-node-a3508ca5-a024-de47-6584-e8a67cb3525f-7cb3525f"
                class="div-block-2">
                <div>
                    <a
                        href="#"
                        className="button-popup w-inline-block"
                        onClick={abrirModal} // Abre el modal al hacer clic
                    >
                        <div className="flex-horizontal gap-column-4px">
                            <div>Crear una operación</div>
                        </div>
                    </a>
                </div>

                {/* modal */}
                <ModalTabla
                    modalAbierto={modalAbierto}
                    abrirModal={abrirModal}
                    cerrarModal={cerrarModal}
                />



            </div>

            {/* tabla */}
            <div class="overflow-auto">
                <div class="data-table-row table-header">
                    <div id="w-node-_73b2db70-1eb0-8b84-3179-7da1fa5d2664-427d0be9"
                        class="text-50 bold color-neutral-700">activo</div>
                    <div id="w-node-_73b2db70-1eb0-8b84-3179-7da1fa5d2666-427d0be9"
                        class="text-50 bold color-neutral-700">tipo</div>
                    <div id="w-node-_73b2db70-1eb0-8b84-3179-7da1fa5d2668-427d0be9"
                        class="text-50 bold color-neutral-700">cantidad</div>
                    <div id="w-node-_73b2db70-1eb0-8b84-3179-7da1fa5d266a-427d0be9"
                        class="text-50 bold color-neutral-700">Precio</div>
                    <div id="w-node-_73b2db70-1eb0-8b84-3179-7da1fa5d266c-427d0be9"
                        class="text-50 bold color-neutral-700">Estado</div>
                </div>
                <div class="rows">
                    {dataInversiones.map((data) => (
                        <div class="data-table-row" key={data.activo}>
                            <div className="text-100 bold color-neutral-800">{data.activo}</div>
                            <div className="text-100 medium">{data.tipo}</div>
                            <div className="text-100 medium">{data.cantidad}</div>
                            <div className="text-100 medium">{data.precio}</div>
                            <div className="text-100 medium">{data.estado}</div>
                        </div>
                    ))}
                </div>

                {/* <div class="data-table-row table-header">
                    <div id="w-node-_73b2db70-1eb0-8b84-3179-7da1fa5d2664-427d0be9"
                        class="text-50 bold color-neutral-700">activo</div>
                    <div id="w-node-_73b2db70-1eb0-8b84-3179-7da1fa5d2666-427d0be9"
                        class="text-50 bold color-neutral-700">tipo</div>
                    <div id="w-node-_73b2db70-1eb0-8b84-3179-7da1fa5d2668-427d0be9"
                        class="text-50 bold color-neutral-700">cantidad</div>
                    <div id="w-node-_73b2db70-1eb0-8b84-3179-7da1fa5d266a-427d0be9"
                        class="text-50 bold color-neutral-700">Precio</div>
                    <div id="w-node-_73b2db70-1eb0-8b84-3179-7da1fa5d266c-427d0be9"
                        class="text-50 bold color-neutral-700">Estado</div>
                </div> 
                <div class="rows">
                    <div class="data-table-row">
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d89-145f0d88"
                            class="text-100 bold color-neutral-800">AAPL</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8b-145f0d88"
                            class="text-100 medium">COMPRA</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8d-145f0d88"
                            class="text-100 medium">100</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8f-145f0d88"
                            class="text-100 medium">99,99</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d91-145f0d88"
                            class="text-100 medium">9.999</div>
                    </div>
                    <div class="data-table-row">
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d89-145f0d88"
                            class="text-100 bold color-neutral-800">AMZN</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8b-145f0d88"
                            class="text-100 medium">COMPRA</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8d-145f0d88"
                            class="text-100 medium">240</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8f-145f0d88"
                            class="text-100 medium">100</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d91-145f0d88"
                            class="text-100 medium">24.000</div>
                    </div>
                    <div class="data-table-row">
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d89-145f0d88"
                            class="text-100 bold color-neutral-800">GOOGL</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8b-145f0d88"
                            class="text-100 medium">VENTA</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8d-145f0d88"
                            class="text-100 medium">100</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8f-145f0d88"
                            class="text-100 medium">100</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d91-145f0d88"
                            class="text-100 medium">10.000</div>
                    </div>
                    <div class="data-table-row">
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d89-145f0d88"
                            class="text-100 bold color-neutral-800">MELI</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8b-145f0d88"
                            class="text-100 medium">COMPRA</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8d-145f0d88"
                            class="text-100 medium">130</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8f-145f0d88"
                            class="text-100 medium">100</div>
                        <div id="w-node-_269d1d2d-2cb2-3200-d275-6492145f0d91-145f0d88"
                            class="text-100 medium">13.000</div>
                    </div>
                </div>*/}
            </div>

        </div>
    )
}