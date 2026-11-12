//
// let nextId = 101;
//
//
// function createTiffineBox() {
//     return { id: nextId++ };
// }
//
//
// function createPerson(name, tiffineBox) {
//     return {
//         name: name,
//         personId: `${tiffineBox.id}`,
//     };
// }
//
// const names = ["Faria", "Sumaiya", "Salman", "Rasel", "Zubayer", "Fahim"];
// const peopleList = [];
//
//
// for (let i = 0; i < 8; i++) {
//     const newBox = createTiffineBox();
//     const newPerson = createPerson(names[i], newBox);
//     peopleList.push(newPerson);
// }
//
// console.log("Databage people");
// peopleList.forEach(person => console.log(person));
//
//
//
//
// function trackAndVerifyBox(submittedPersonId, actualBoxId, loanAmount) {
//
//
//     const registeredPerson = peopleList.find(p => p.personId === submittedPersonId);
//
//
//     if (!registeredPerson) {
//         return `Differet Box(${submittedPersonId}) `;
//     }
//
//
//     if (Number(registeredPerson.personId) !== actualBoxId) {
//
//
//         const realOwner = peopleList.find(p => Number(p.personId) === actualBoxId);
//         const realOwnerName = realOwner ? realOwner.name : "Extra Box";
//
//         return `
//     ${registeredPerson.name} (ID: ${submittedPersonId})
//      ${actualBoxId}
//      ${realOwnerName} (ID: ${actualBoxId})
//     `;
//     }
//
//
//     return `${registeredPerson.name} same box  ${loanAmount} `;
// }
//
//
//
// const investigationReport = trackAndVerifyBox('103', 108, 50000);
// console.log(investigationReport);
//
// const people = [
//   { id: 1, name: "Faria" },
//   { id: 2, name: "Sumaiya" },
//   { id: 3, name: "Salman" },
//   { id: 4, name: "Rasel" },
//   { id: 5, name: "Zubayer" },
//   { id: 6, name: "Tanvir" }
// ];
// const tiffinBoxes = [
//   {
//     id: "Box-101",
//     owner: "Faria",
//     size: "Large",
//     condition: "Good",
//     currentHolder: "Faria"
//   },
//   {
//     id: "Box-102",
//     owner: "Sumaiya",
//     size: "Medium",
//     condition: "Good",
//     currentHolder: "Sumaiya"
//   },
//   {
//     id: "Box-103",
//     owner: "Salman",
//     size: "Small",
//     condition: "Good",
//     currentHolder: "Salman"
//   },
//   {
//     id: "Box-104",
//     owner: "Rasel",
//     size: "Large",
//     condition: "Good",
//     currentHolder: "Rasel"
//   },
//   {
//     id: "Box-105",
//     owner: "Zubayer",
//     size: "Medium",
//     condition: "Good",
//     currentHolder: "Zubayer"
//   },
//   {
//     id: "Box-106",
//     owner: "Tanvir",
//     size: "Small",
//     condition: "Good",
//     currentHolder: "Tanvir"
//   },
//   {
//     id: "Box-107",
//     owner: "Faria",
//     size: "Medium",
//     condition: "Good",
//     currentHolder: "Faria"
//   },
//   {
//     id: "Box-108",
//     owner: "Sumaiya",
//     size: "Large",
//     condition: "Good",
//     currentHolder: "Sumaiya"
//   }
// ];
// console.log("All People:");

// people.forEach(person => {
//   console.log(person);
// });

// console.log("All Tiffin Boxes:");

// tiffinBoxes.forEach(box => {
//   console.log(box);
// });
// const box = tiffinBoxes.find(box => box.id === "Box-105");

// console.log("Box ID:", box.id);
// console.log("Original Owner:", box.owner);
// console.log("Current Holder:", box.currentHolder);
// console.log("Size:", box.size);


class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class TiffinBox {
    constructor(id, owner, size, condition = "Good") {
        this._id = id;
        this._owner = owner;
        this.size = size;

        this._condition = condition;
        this._currentHolder = owner;
        this._status = "active";


        this.history = [
            {
                action: "CREATED",
                from: null,
                to: owner.id,
                time: 0,
                confirmed: true
            }
        ];


        this.responsibilities = [];


        this.damageReports = [];

        this.statements = [];

        this.missingInfo = null;
    }

    get id() {
        return this._id;
    }

    get owner() {
        return this._owner;
    }

    get condition() {
        return this._condition;
    }

    set condition(value) {
        if (!["Good", "Damaged"].includes(value)) {
            throw new Error("Invalid box condition");
        }

        this._condition = value;
    }

    get currentHolder() {
        return this._currentHolder;
    }

    set currentHolder(person) {
        if (!(person instanceof Person)) {
            throw new Error("Invalid holder");
        }

        this._currentHolder = person;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        if (!["active", "missing"].includes(value)) {
            throw new Error("Invalid box status");
        }

        this._status = value;
    }

    addHistory(action) {
        this.history.push(action);
    }

    // STEP 4: Generator function
    *getHistory() {
        for (const action of this.history) {
            yield action;
        }
    }
}
// ==========================================
// STEP 1: CREATE 6 PEOPLE
// ==========================================

const people = [
    new Person(1, "Faria"),
    new Person(2, "Sumaiya"),
    new Person(3, "Salman"),
    new Person(4, "Rasel"),
    new Person(5, "Zubayer"),
    new Person(6, "Tanvir")
];


// ==========================================
// STEP 1: CREATE 8 TIFFIN BOXES
// ==========================================

const tiffinBoxes = [
    new TiffinBox("Box-101", people[0], "Large"),
    new TiffinBox("Box-102", people[1], "Medium"),
    new TiffinBox("Box-103", people[2], "Small"),
    new TiffinBox("Box-104", people[3], "Large"),
    new TiffinBox("Box-105", people[4], "Medium"),
    new TiffinBox("Box-106", people[5], "Small"),
    new TiffinBox("Box-107", people[0], "Medium"),
    new TiffinBox("Box-108", people[1], "Large")
];


// ==========================================
// STEP 8: CLOSURE FOR UNIQUE REQUEST IDs
// ==========================================

function createIdGenerator(prefix) {
    let count = 1;

    return function () {
        return `${prefix}-${count++}`;
    };
}


// ==========================================
// STEP 8: FUNCTION FOR CALL, APPLY, BIND
// ==========================================

function formatBoxField(label, value) {
    return `${this.id} | ${label}: ${value}`;
}


// ==========================================
// STEP 2-10: MAIN SYSTEM CLASS
// ==========================================

class TiffinSystem {
    constructor(people, boxes) {

        this.people = new Map();

        this.boxes = new Map();

        this.pendingRequests = new Map();

        this.requestQueues = new Map();

        this.makeRequestId = createIdGenerator("REQ");

        // Store people
        for (const person of people) {
            if (this.people.has(person.id)) {
                throw new Error("Duplicate person ID");
            }

            this.people.set(person.id, person);
        }

        // STEP 8: Proxy protects owner and box ID
        for (const box of boxes) {

            const protectedBox = new Proxy(box, {
                set(target, property, value) {
                    if (
                        ["_id", "_owner", "id", "owner"].includes(property)
                    ){
                        throw new Error("ID and original owner cannot be changed");
                    }

                    return Reflect.set(target, property, value);
                }
            });

            if (this.boxes.has(box.id)) {
                throw new Error("Duplicate box ID");
            }

            this.boxes.set(box.id, protectedBox);
        }
    }


    // ========================================
    // STEP 2: FIND PERSON
    // ========================================

    getPerson(personId) {
        const person = this.people.get(personId);

        if (!person) {
            throw new Error("Person not found");
        }

        return person;
    }


    // ========================================
    // STEP 2: FIND BOX
    // ========================================

    getBox(boxId) {
        const box = this.boxes.get(boxId);

        if (!box) {
            throw new Error("Box not found");
        }

        return box;
    }


    // ========================================
    // STEP 3: CHECK PENDING REQUEST
    // ========================================

    hasPendingRequest(boxId) {
        return [...this.pendingRequests.values()].some(
            request =>
                request.boxId === boxId &&
                request.status === "PENDING"
        );
    }
    // ========================================
    // STEP 3: REQUEST HANDOFF
    // ========================================

    requestHandoff(
        boxId,
        fromId,
        toId,
        returnBy,
        currentTime
    ) {

        const box = this.getBox(boxId);

        const from = this.getPerson(fromId);

        const to = this.getPerson(toId);

        if (box.status === "missing") {
            throw new Error("Missing box cannot be transferred");
        }

        if (box.currentHolder.id !== from.id) {
            throw new Error("Giver is not the current holder");
        }

        if (from.id === to.id) {
            throw new Error("Cannot transfer box to yourself");
        }

        if (this.hasPendingRequest(boxId)) {
            throw new Error("Another request is already pending");
        }

        if (
            !Number.isFinite(currentTime) ||
            !Number.isFinite(returnBy) ||
            returnBy <= currentTime
        ) {
            throw new Error("Invalid return deadline");
        }

        // STEP 6: Check existing promises
        const activeResponsibilities =
            box.responsibilities.filter(item => item.active);

        const earliestDeadline = activeResponsibilities.length
            ? Math.min(...activeResponsibilities.map(item => item.returnBy))
            : Infinity;

        const deadlineExtensionRequired =
            returnBy > earliestDeadline;

        // Owner approval is needed for onward handoff
        const needsOwnerApproval =
            from.id !== box.owner.id || deadlineExtensionRequired;

        const request = {
            id: this.makeRequestId(),
            kind: "HANDOFF",
            boxId,
            fromId,
            toId,
            returnBy,
            currentTime,
            approved: !needsOwnerApproval,
            extensionApproved: false,
            deadlineExtensionRequired,
            status: "PENDING"
        };

        this.pendingRequests.set(request.id, request);

        return request;
    }


    // ========================================
    // STEP 3: OWNER APPROVAL
    // ========================================

    approveTransfer(
        ownerId,
        requestId,
        approved,
        approveDeadlineExtension = false
    ) {

        const request = this.pendingRequests.get(requestId);

        if (!request || request.status !== "PENDING") {
            throw new Error("Request not found or completed");
        }

        const box = this.getBox(request.boxId);

        if (box.owner.id !== ownerId) {
            throw new Error("Only original owner can approve");
        }

        if (request.approved) {
            throw new Error("Request is already approved");
        }

        if (!approved) {
            request.status = "REJECTED";
            return "Owner rejected the request";
        }

        if (
            request.deadlineExtensionRequired &&
            !approveDeadlineExtension
        ) {
            request.status = "REJECTED";

            return "Deadline extension was not approved";
        }

        request.approved = true;

        request.extensionApproved = approveDeadlineExtension;
        return "Owner approved the request";
    }


    // ========================================
    // STEP 3: RECEIVER CONFIRMATION
    // STEP 8: PROMISE + CALLBACK
    // ========================================

    confirmHandoff(
        receiverId,
        requestId,
        accepted,
        callback = () => {}
    ) {

        return Promise.resolve().then(() => {

            const request = this.pendingRequests.get(requestId);

            if (
                !request ||
                request.kind !== "HANDOFF" ||
                request.status !== "PENDING"
            ) {
                throw new Error("Invalid handoff request");
            }

            const box = this.getBox(request.boxId);

            if (request.toId !== receiverId) {
                throw new Error("Only intended receiver can confirm");
            }

            if (!request.approved) {
                throw new Error("Owner approval is required");
            }

            const from = this.getPerson(request.fromId);

            const to = this.getPerson(request.toId);

            // Receiver denies the handoff
            if (!accepted) {

                request.status = "REJECTED";

                box.statements.push({
                    action: "HANDOFF_DENIED",
                    from: from.id,
                    to: to.id
                });

                box.addHistory({
                    action: "HANDOFF_DENIED",
                    from: from.id,
                    to: to.id,
                    confirmed: false
                });

                const result = "Receiver denied the handoff";

                callback(result);

                return result;
            }

            // STEP 6: Apply approved extension
            if (request.extensionApproved) {

                box.responsibilities
                    .filter(item => item.active)
                    .forEach(item => {
                        item.returnBy = request.returnBy;
                    });
            }

            // Update current holder
            box.currentHolder = to;

            // STEP 5: New borrower responsibility
            box.responsibilities.push({
                borrowerId: to.id,
                returnBy: request.returnBy,
                active: true
            });

            // STEP 4: Save confirmed history
            box.addHistory({
                action: "HANDOFF_CONFIRMED",
                from: from.id,
                to: to.id,
                time: request.currentTime,
                confirmed: true
            });

            request.status = "CONFIRMED";

            const result = "Handoff successfully confirmed";

            callback(result);

            return result;
        });
    }


    // ========================================
    // STEP 5: REQUEST RETURN
    // ========================================

    requestReturn(boxId, fromId, toId, currentTime) {

        const box = this.getBox(boxId);

        const from = this.getPerson(fromId);

        const to = this.getPerson(toId);

        if (box.status === "missing") {
            throw new Error("Missing box cannot be returned");
        }

        if (box.currentHolder.id !== from.id) {
            throw new Error("You do not currently hold this box");
        }

        if (this.hasPendingRequest(boxId)) {
            throw new Error("Another request is already pending");
        }

        if (from.id === to.id) {
            throw new Error("Invalid return");
        }

        const request = {
            id: this.makeRequestId(),
            kind: "RETURN",
            boxId,
            fromId,
            toId,
            currentTime,
            approved: to.id === box.owner.id,
            status: "PENDING"
        };

        this.pendingRequests.set(request.id, request);

        return request;
    }

    // ========================================
    // STEP 5: CONFIRM RETURN
    // ========================================

    confirmReturn(receiverId, requestId, accepted) {

        return Promise.resolve().then(() => {

            const request = this.pendingRequests.get(requestId);

            if (
                !request ||
                request.kind !== "RETURN" ||
                request.status !== "PENDING"
            ) {
                throw new Error("Invalid return request");
            }

            const box = this.getBox(request.boxId);

            if (request.toId !== receiverId) {
                throw new Error("Only intended receiver can confirm");
            }

            if (!request.approved) {
                throw new Error("Owner approval is required");
            }

            const from = this.getPerson(request.fromId);

            const to = this.getPerson(request.toId);

            if (!accepted) {
                request.status = "REJECTED";

                box.statements.push({
                    action: "RETURN_DENIED",
                    from: from.id,
                    to: to.id
                });

                box.addHistory({
                    action: "RETURN_DENIED",
                    from: from.id,
                    to: to.id,
                    confirmed: false
                });

                return "Receiver denied the return";
            }

            box.currentHolder = to;

            // STEP 5: Clear responsibility only
            // when original owner confirms return
            if (to.id === box.owner.id) {

                box.responsibilities.forEach(item => {
                    item.active = false;
                });
            }

            box.addHistory({
                action: "RETURN_CONFIRMED",
                from: from.id,
                to: to.id,
                time: request.currentTime,
                confirmed: true
            });

            request.status = "CONFIRMED";

            return "Return successfully confirmed";
        });
    }


    // ========================================
    // STEP 6: CHECK OVERDUE
    // ========================================

    isOverdue(boxId, currentTime) {

        const box = this.getBox(boxId);

        return box.responsibilities.some(
            item => item.active && currentTime > item.returnBy
        );
    }


    // ========================================
    // STEP 7: REPORT DAMAGE
    // ========================================

    reportDamage(boxId, reporterId, description, currentTime) {

        const box = this.getBox(boxId);

        const reporter = this.getPerson(reporterId);

        if (box.status === "missing") {
            throw new Error("Box is missing");
        }

        if (box.currentHolder.id !== reporter.id) {
            throw new Error("Only current holder can report damage");
        }

        box.condition = "Damaged";

        box.damageReports.push({
            reporterId,
            description,
            time: currentTime
        });

        box.addHistory({
            action: "DAMAGE_REPORTED",
            reporter: reporterId,
            description,
            time: currentTime,
            confirmed: true
        });

        return "Damage report saved";
    }


    // ========================================
    // STEP 7: REPORT MISSING BOX
    // ========================================

    reportMissing(boxId, reporterId, currentTime) {

        const box = this.getBox(boxId);

        const reporter = this.getPerson(reporterId);

        if (box.status === "missing") {
            throw new Error("Already reported missing");
        }

        if (box.currentHolder.id !== reporter.id) {
            throw new Error("Only current holder can report missing");
        }

        box.missingInfo = {
            lastConfirmedHolder: box.currentHolder.id,
            reportedBy: reporter.id,
            time: currentTime
        };

        box.status = "missing";

        box.addHistory({
            action: "BOX_REPORTED_MISSING",
            lastConfirmedHolder: box.currentHolder.id,
            reportedBy: reporter.id,
            time: currentTime,
            confirmed: true
        });

        return "Box reported missing";
    }
    // ========================================
    // STEP 9: REQUEST QUEUE
    // FIRST VALID REQUESTER GETS PRIORITY
    // ========================================

    requestBox(boxId, requesterId, returnBy, currentTime) {

        const box = this.getBox(boxId);

        const requester = this.getPerson(requesterId);

        if (box.status === "missing") {
            throw new Error("Box is missing");
        }

        if (box.currentHolder.id === requester.id) {
            throw new Error("You already hold this box");
        }

        if (
            !Number.isFinite(returnBy) ||
            !Number.isFinite(currentTime) ||
            returnBy <= currentTime
        ) {
            throw new Error("Invalid return deadline");
        }

        if (!this.requestQueues.has(boxId)) {
            this.requestQueues.set(boxId, []);
        }

        const queue = this.requestQueues.get(boxId);

        if (queue.some(item => item.requesterId === requesterId)) {
            throw new Error("Duplicate request");
        }

        const queueRequest = {
            id: this.makeRequestId(),
            requesterId,
            returnBy,
            currentTime
        };

        queue.push(queueRequest);

        return {
            message: "Request added to queue",
            position: queue.length
        };
    }
    //========================================
    // STEP 9: GRANT NEXT REQUEST
    // ========================================

    grantNextRequest(boxId, currentHolderId) {

        const box = this.getBox(boxId);

        if (box.currentHolder.id !== currentHolderId) {
            throw new Error("Only current holder can grant request");
        }

        if (this.hasPendingRequest(boxId)) {
            throw new Error("Another handoff is pending");
        }

        const queue = this.requestQueues.get(boxId);

        if (!queue || queue.length === 0) {
            throw new Error("No waiting requests");
        }

        const next = queue.shift();

        return this.requestHandoff(
            boxId,
            currentHolderId,
            next.requesterId,
            next.returnBy,
            next.currentTime
        );
    }


    // ========================================
    // STEP 10: FINAL BOX REPORT
    // ========================================

    printReport(boxId, currentTime) {

        const box = this.getBox(boxId);

        const lines = [];

        // STEP 8: bind()
        const boundFormat = formatBoxField.bind(box);

        lines.push(boundFormat(
            "Original Owner",
            box.owner.name
        ));

        // STEP 8: call()
        lines.push(formatBoxField.call(
            box,
            "Current Holder",
            box.currentHolder.name
        ));

        // STEP 8: apply()
        lines.push(formatBoxField.apply(
            box,
            ["Condition", box.condition]
        ));

        lines.push(`Size: ${box.size}`);

        lines.push(`Status: ${box.status}`);

        lines.push(
            `Overdue: ${this.isOverdue(boxId, currentTime) ? "Yes" : "No"}`
        );

        lines.push("Responsibilities:");

        box.responsibilities
            .filter(item => item.active)
            .forEach(item => {

                const borrower = this.getPerson(item.borrowerId);

                lines.push(
                    `${borrower.name} | Return by: ${item.returnBy}`
                );
            });

        lines.push("Complete History:");

        // STEP 4: Generator
        for (const action of box.getHistory()) {
            lines.push(JSON.stringify(action));
        }

        if (box.status === "missing") {
            lines.push(
                `Last confirmed holder: ${this.getPerson(
                    box.missingInfo.lastConfirmedHolder
                ).name}`
            );
        }

        console.log(lines.join("\n"));

        return lines;
    }

// ========================================
    // STEP 10: REPORT ALL BOXES
    // ========================================

    printAllReports(currentTime) {

        for (const box of this.boxes.values()) {

            console.log("\n==============================");

            this.printReport(box.id, currentTime);
        }
    }
}


// ==========================================
// CREATE MAIN SYSTEM
// ==========================================

const system = new TiffinSystem(people, tiffinBoxes);


// ==========================================
// STEP 10: DEMONSTRATION HELPER
// ==========================================

async function transferBox(
    boxId,
    fromId,
    toId,
    returnBy,
    currentTime
) {

    const request = system.requestHandoff(
        boxId,
        fromId,
        toId,
        returnBy,
        currentTime
    );

    // Ask original owner for approval if required
    if (!request.approved) {

        system.approveTransfer(
            system.getBox(boxId).owner.id,
            request.id,
            true,
            true
        );
    }

    return await system.confirmHandoff(
        toId,
        request.id,
        true,
        result => console.log(result)
    );
}


// ==========================================
// STEP 10: DEMONSTRATE REQUIRED CASES
// ==========================================

async function runDemonstrations() {

    // CASE 1: Normal borrowing and return

    let request = system.requestHandoff(
        "Box-101", 1, 2, 10, 1
    );

    await system.confirmHandoff(2, request.id, true);

    let returnRequest = system.requestReturn(
        "Box-101", 2, 1, 5
    );

    await system.confirmReturn(1, returnRequest.id, true);


    // CASE 2: Several handoffs

    await transferBox("Box-102", 2, 3, 20, 1);

    await transferBox("Box-102", 3, 4, 25, 2);

    await transferBox("Box-102", 4, 5, 30, 3);


    // CASE 3: Receiver denies handoff
    request = system.requestHandoff(
        "Box-103", 3, 4, 20, 1
    );

    await system.confirmHandoff(4, request.id, false);


    // CASE 4: Overdue box

    request = system.requestHandoff(
        "Box-104", 4, 5, 10, 2
    );

    await system.confirmHandoff(5, request.id, true);

    console.log(
        "Box-104 overdue:",
        system.isOverdue("Box-104", 12)
    );


    // CASE 5: Damaged box

    await transferBox("Box-105", 5, 3, 40, 1);

    system.reportDamage(
        "Box-105",
        3,
        "The lid is broken",
        5
    );

    await transferBox("Box-105", 3, 6, 45, 6);


    // CASE 6: Two people request the same box

    system.requestBox("Box-106", 1, 40, 1);

    system.requestBox("Box-106", 2, 40, 1);

    request = system.grantNextRequest("Box-106", 6);

    await system.confirmHandoff(1, request.id, true);

    request = system.grantNextRequest("Box-106", 1);

    system.approveTransfer(6, request.id, true, false);

    await system.confirmHandoff(2, request.id, true);


    // CASE 7: Several handoffs, direct return to owner

    await transferBox("Box-107", 1, 2, 50, 1);

    await transferBox("Box-107", 2, 3, 55, 2);

    await transferBox("Box-107", 3, 4, 60, 3);

    returnRequest = system.requestReturn(
        "Box-107", 4, 1, 4
    );

    await system.confirmReturn(1, returnRequest.id, true);


    // CASE 8: Box already in use

    await transferBox("Box-108", 2, 1, 30, 1);

    system.requestBox("Box-108", 3, 40, 2);

    console.log("Box-108 waiting queue:",
        system.requestQueues.get("Box-108")
    );


    // EXTRA CASE 1: Unauthorized return

    try {
        system.requestReturn("Box-101", 3, 1, 6);
    } catch (error) {
        console.log("Extra case 1:", error.message);
    }


    // EXTRA CASE 2: Unknown person

    try {
        system.getPerson(99);
    } catch (error) {
        console.log("Extra case 2:", error.message);
    }


    // EXTRA CASE 3: Missing box

    system.reportMissing("Box-108", 1, 8);

    try {
        system.requestHandoff("Box-108", 1, 3, 50, 9);
    } catch (error) {
        console.log("Extra case 3:", error.message);
    }


    // FINAL REPORT

    system.printAllReports(12);
}

// RUN PROJECT

runDemonstrations().catch(error => {
    console.error("Project error:", error.message);
});



