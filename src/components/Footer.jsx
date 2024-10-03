import React from 'react';
import { injectIntl } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.externalLinkClickHandler = this.externalLinkClickHandler.bind(this);
  }

  externalLinkClickHandler(event) {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    sendTrackEvent(eventName, properties);
  }

  render() {
    const { config } = this.context;

    return (
      <footer
        role="contentinfo"
        className="footer d-flex border-top py-3 px-4"
      >
        <div className="container-fluid d-flex content-container">
          {/* <a
            className="d-block"
            href={config.LMS_BASE_URL}
            aria-label={intl.formatMessage(messages['footer.logo.ariaLabel'])}
          >
            <img
              style={{ maxHeight: 45 }}
              src={logo || config.LOGO_TRADEMARK_URL}
              alt={intl.formatMessage(messages['footer.logo.altText'])}
            />
          </a>
          <div className="flex-grow-1" />
          {showLanguageSelector && (
            <LanguageSelector
              options={supportedLanguages}
              onSubmit={onLanguageSelected}
            />
          )} */}
          <div className="powered-area">
            <div>
              <a href="https://www.hdruk.ac.uk/" rel="noreferrer" target="_blank" aria-label="Visit the HDR UK website">
                <img src="https://www.hdruk.ac.uk/wp-content/themes/hdruk/assets/img/logo.svg" alt="" width="70" />
              </a>
            </div>
            <div>Powered by:</div>
            <div>
              <a href="https://docs.tutor.edly.io" rel="noreferrer" target="_blank" aria-label="Visit the Edly Tutor website">
                <img src={`${config.LMS_BASE_URL}/static/hdrukfuturestheme/images/tutor-logo.png`} alt="Runs on Tutor" width="57" />
              </a>
            </div>
            <div>
              <a href="https://openedx.org/" rel="noreferrer" target="_blank" aria-label="Visit the Open edX website">
                <img src={`${config.LMS_BASE_URL}/static/hdrukfuturestheme/images/openedx-logo.png`} alt="" width="79" />
              </a>
            </div>
            <div>
              <a href="https://evt.digital" rel="noreferrer" target="_blank" aria-label="Visit the EVT Digital website">
                <img src={`${config.LMS_BASE_URL}/static/hdrukfuturestheme/images/evt-logo.png`} alt="" width="65" />
              </a>
            </div>
          </div>

          <nav className="nav-colophon" aria-label="About">
            <ol>
              <li>
                <a href={`${config.MARKETING_SITE_BASE_URL}/about-us`}>About Us</a>
              </li>
              <li>
                <a href={`${config.MARKETING_SITE_BASE_URL}/terms-of-service`}>Terms of Sevice</a>
              </li>
              <li>
                <a href={`${config.MARKETING_SITE_BASE_URL}/privacy-policy`}>Privacy Policy</a>
              </li>
              <li>
                <a href={`${config.MARKETING_SITE_BASE_URL}/help`}>Help</a>
              </li>
            </ol>
          </nav>
        </div>
      </footer>
    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: [],
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
