import React from 'react'
import Script from 'react-load-script'

const ScriptLink = () => {
    return(
        <div className="ScriptLink">
            {/* Bootstrap core JavaScript */}
            <Script url="/assets/vendor/jquery/jquery.min.js" /> 
            <Script url="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />

            {/* Plugin JavaScript */}
            <Script url="/assets/vendor/jquery-easing/jquery.easing.min.js" />
            <Script url="/assets/vendor/magnific-popup/jquery.magnific-popup.min.js" />

            {/* Contact Form JavaScript */}
            <Script url="/assets/js/jqBootstrapValidation.js" />
            <Script url="/assets/js/contact_me.js" />

            {/* Custom scripts for this template */}
            <Script url="/assets/js/freelancer.min.js" />                
        </div>
    )
}

export default ScriptLink;