class Semaphore {
    private final int NUMBER_OF_PERMITS;
    private int taken;
    
    public Semaphore(int maxPermits) {
        this.NUMBER_OF_PERMITS = maxPermits;
        this.taken = 0;
    }

    public void acquire() throws InterruptedException {
        if (this.taken == NUMBER_OF_PERMITS) {
            wait();
        }
        
        this.taken++;
    }

    public void release() {
        this.taken--;
        notifyAll();
    }
}