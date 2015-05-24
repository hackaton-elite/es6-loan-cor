class ApproverEntity {
    constructor(type, threshold) {
        this.type = type;
        this.threshold = threshold;
    }

    getThreshold() {
        return this.threshold;
    }

    getType() {
        return this.type;
    }

    setNextLink(nextLink) {
        this.nextLink = nextLink;
    }

    propagate(loanEntity) {
        return this.nextLink.handle(loanEntity);
    }
}

module.exports = ApproverEntity;
