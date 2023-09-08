import './landing.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

export default function Landing() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        user: '',
        password: ''
    })


    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))

    }
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita el comportamiento de envío predeterminado del formulario
        navigate('/dashboard') 
        /* try {
           dispatch()
            navigate('/') 
          
        } catch (error) {
          
        } */
      };


    return (
        <div class="f-account-section">
            <div class="f-account-image-wrapper">
                <img
                    src="https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ef6faa5ea1b43be186104a_intercapital-login.jpeg"
                    loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 40vw, 45vw"
                    srcset="https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ef6faa5ea1b43be186104a_intercapital-login-p-500.jpeg 500w, https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ef6faa5ea1b43be186104a_intercapital-login-p-800.jpeg 800w, https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ef6faa5ea1b43be186104a_intercapital-login-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ef6faa5ea1b43be186104a_intercapital-login-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ef6faa5ea1b43be186104a_intercapital-login-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ef6faa5ea1b43be186104a_intercapital-login-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ef6faa5ea1b43be186104a_intercapital-login-p-3200.jpeg 3200w, https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ef6faa5ea1b43be186104a_intercapital-login.jpeg 8495w"
                    alt="" class="f-image-cover" />
            </div>


            <div class="f-account-container-r">
                <div class="f-account-content-wrapper">
                    <div class="f-margin-bottom-08"><img
                        src="https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ed834f7c8567f69d6ada4e_intercapital-logo-1.png"
                        loading="lazy" width="250" sizes="(max-width: 479px) 90vw, 250px" alt=""
                        srcset="https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ed834f7c8567f69d6ada4e_intercapital-logo-1-p-500.png 500w, https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ed834f7c8567f69d6ada4e_intercapital-logo-1-p-800.png 800w, https://uploads-ssl.webflow.com/64ed71371fdfd6c8427d0b8d/64ed834f7c8567f69d6ada4e_intercapital-logo-1.png 1457w"
                        class="image" />
                        <h5 class="f-h5-heading">Accede a tus inversiones</h5>
                    </div>


                    <div class="f-account-form-block w-form">

                        <form id="wf-form-Sign-In-2" name="wf-form-Sign-In-2" 
                            onSubmit={handleSubmit}
                            >
                            <div class="w-layout-grid f-account-input-grid">
                                <div class="f-field-wrapper">
                                    <div class="f-field-label">Numero de documento</div><input type="number"
                                        class="f-field-input w-input" maxlength="256" name="Email-Field-02"
                                        required
                                        id="Email-Field-02" />
                                </div>
                                <div class="f-field-wrapper">
                                    <div class="f-field-label">Contraseña</div><input type="password"
                                        class="f-field-input w-input" maxlength="256" name="Password-Field-02"
                                        required
                                        id="Password-Field-02" />
                                </div>
                            </div>
                            <div class="f-account-form-button"><input type="submit" value="Iniciar sesión"
                                 class="f-button-neutral" /></div>
                        </form>
                        <div class="f-success-message w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div class="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}