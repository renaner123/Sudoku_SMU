<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [SessionDescriptionHandler](./sip.js.sessiondescriptionhandler.md) &gt; [applyModifiers](./sip.js.sessiondescriptionhandler.applymodifiers.md)

## SessionDescriptionHandler.applyModifiers() method

Applies modifiers to SDP prior to setting the local or remote description.

<b>Signature:</b>

```typescript
protected applyModifiers(sdp: RTCSessionDescriptionInit, modifiers?: Array<SessionDescriptionHandlerModifier>): Promise<RTCSessionDescriptionInit>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  sdp | <code>RTCSessionDescriptionInit</code> | SDP to modify. |
|  modifiers | <code>Array&lt;SessionDescriptionHandlerModifier&gt;</code> | Modifiers to apply. |

<b>Returns:</b>

`Promise<RTCSessionDescriptionInit>`

