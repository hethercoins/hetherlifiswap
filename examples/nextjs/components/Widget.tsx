import { LiFiWidget } from '@lifi/widget';
import { WidgetEvents } from './WidgetEvents';

export const Widget = () => {
  return (
    <>
      <WidgetEvents />
      <LiFiWidget
        config={{
          fromChain: 137,
          toChain: 137,
          fromToken: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          toToken: '0x2b0f99d8e85227784fb0b7bf0b6ede6458741eee',
          fromAmount: 10,
          containerStyle: {
            border: `1px solid rgb(234, 234, 234)`,
            borderRadius: '16px',
          },
        }}
      />
    </>
  );
};
