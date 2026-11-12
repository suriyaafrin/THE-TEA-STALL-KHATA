# ☕ Jamal Mama's Digital Khata

A JavaScript ledger system designed to solve debt delegation, accountability, and payment disputes at a campus tea stall—without ever losing historical data.

---

## 📖 The Problem

At Jamal Mama's tea stall beside the campus gate, regulars buy snacks on credit (*khata*). 

1. **Nabila** orders tea and singara and puts it on the *khata*.
2. **Tuhin** offers to cover Nabila's bill.
3. **Tuhin** passes the responsibility to **Ishrat**.
4. **Ishrat** passes it on to **Rafi**.
5. At month-end, **Rafi** claims he paid Jamal Mama, while **Jamal Mama** says he never received it.

### Key Questions Solved by This System
* **Who actually owes the money?** Nabila is the *original debtor* (the contract originates with her), while Rafi is the *current assignee* (the active payer). If Rafi defaults or disputes payment, liability falls back down the chain.
* **How is a payment confirmed?** A payment is a two-step state transition: `CLAIMED` by a payer, and `CONFIRMED` by Jamal Mama (the creditor).
* **What if two people claim they paid the same bill?** Every claim is logged as an immutable event. Only one claim can be officially `CONFIRMED` by Jamal Mama; any duplicate or conflicting claims are flagged for dispute resolution without overwriting history.

---

## 🛠️ Core Architecture & Design

To ensure no historical record is ever lost or silently overwritten, this system uses **Event Sourcing** combined with **`Object.defineProperty()`** for strict property protection:

* **Immutable Audit Trail (`history`):** Every action (creation, delegation, payment claim, confirmation, rejection) is appended to a private log. Reading `entry.history` returns a frozen copy so external code cannot tamper with past events.
* **Protected State (`Object.defineProperty`):** Critical fields like `id`, `amount`, and `originalDebtor` are configured with `writable: false` and `configurable: false`.
* **Controlled Mutations via Setters:** Changing the `currentPayer` or `status` is intercepted by custom `get` and `set` descriptors that validate transitions and automatically record who did what and when.

---
