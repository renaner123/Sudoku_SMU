<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [Dialog](./sip.js.dialog.md) &gt; [id](./sip.js.dialog.id.md)

## Dialog.id property

A dialog is identified at each UA with a dialog ID, which consists of a Call-ID value, a local tag and a remote tag. The dialog ID at each UA involved in the dialog is not the same. Specifically, the local tag at one UA is identical to the remote tag at the peer UA. The tags are opaque tokens that facilitate the generation of unique dialog IDs. https://tools.ietf.org/html/rfc3261\#section-12

<b>Signature:</b>

```typescript
get id(): string;
```