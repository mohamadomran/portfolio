export function Footer() {
    return (
        <footer className='mt-8 mb-8'>
            <div className='flex flex-col items-center justify-between gap-6 mt-12 '>
                <div className='flex flex-col'>
                    <p className='text-sm text-base-content'>
                        &copy; {new Date().getFullYear()} Mohamad Omran. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
