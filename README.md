# farr
Format for Abstract Resource Representation

## General
This is an experimental format for representing resources in a generic way. 


### Status
This project is in vary initial stages and it is likely that breaking changes will be introduced w/o warning while the experiment progresses. If/When the project stabilizes, the status will be changed from "working draft" to "stable draft." Until that time, only PoC and disposable, non-critical experimental projects should be created based on this draft.  

Feel free to fork this project at any time. Due to the volatile nature of the project at this stage, I am not likely to be able to support PRs right now. Once it settles down, I will announce accepting of PRs to help me fix and improve the project.

### Resource
Intially this work is focused on what it takes to represent an information resource for the WWW in a general way (e.g. data and actions). The thinking here is that representing a _resource_ has a value in and of itself. That is different than representing an _object_. In this POV, the _resource_ is the classic "something of interest" that has an address on the WWW.  That resource MAY contain information derived from many _objects_ that existing internal to the application.

### Representation
A secondary aim of this work is to focus on what it takes to _represent_ a resource for the WWW. Here, the idea is to be able to represent any resource using one (or more) of the registered IANA media types. In this view, _representation_ is independent of _resource_. In an ideal implementation, the resource (represented by the FARR document) can be passed to a media-type representor that converts the FARR into a specific media type (HTML, Cj, HAL, CSV, etc.). In this way, the process from resource to representation can be effectively automated _without_ the need for any domain-specific information.

### Domain-Agnostic
While it is assumed that composing a _resource_ will require domain-specific information (e.g. what objects should be included in this resource? which actions should be allowed for this resource at this point in time? etc.), this project assumes that the _representation_ can be generated using a general algorithm without any need for domain-specific information. IOW, that the representor an operate on the FARR document in a consistent manner regardless of the data, actions, or domain details encoded in the FARR document.

@mamund

