import React from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

import Heading from '../components/Heading';

const PayCodes = (props) => {
  const { addresses } = props;
  const bitcoinAddress = `bitcoin: ${addresses.bitcoin}`;
  const ethAddress = `ethereum: ${addresses.ethereum}`;

  return (
    <PayOptionWrapper>
      <PayOption>
        <Heading style={{ color: '#110C02' }} center text="Ethereum" />
        <QRCode style={{ margin: 'auto' }} value={ethAddress} />
      </PayOption>
      <PayOption>
        <Heading style={{ color: '#110C02' }} center text="Bitcoin" />
        <QRCode style={{ margin: 'auto' }} value={bitcoinAddress} />
      </PayOption>
    </PayOptionWrapper>
  );
};


export default PayCodes;
const PayOptionWrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  ${props => props.theme.media.tablet_portrait_up`
    flex-direction: row;

  `};
`;

const PayOption = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  ${props => props.theme.media.tablet_portrait_up`
    width: 50%;
  `};
`;
