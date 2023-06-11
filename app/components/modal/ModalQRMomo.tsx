'use client'

import useQrModal from '@/hooks/useQrModal';
import CustomModal from './Modal';
import Image from 'next/image'

const QrMomo = () => {
    const qrModal = useQrModal()

    return (
        <CustomModal
            isOpen={qrModal.isOpen}
            onClose={qrModal.onClose}
            title="Momo Payment"
        >
            <Image src="/images/MomoQR.jpg" alt="Momo QR Code" className="mb-4" width={300} height={300}/>
            <p>Scan the QR code with your Momo app to make the payment.</p>
        </CustomModal>
    );
}

export default QrMomo