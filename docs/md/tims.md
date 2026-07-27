# Support for MGF and timsTOF Data

The following MS Annika versions support MGF and timsTOF data input:
- Proteome Discoverer 3.1: [MS Annika 2.0 v2.2.1](https://github.com/hgb-bin-proteomics/MSAnnika/releases/tag/v2.2.1) or greater (e.g. [latest](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD3.1/latest.zip))
- Proteome Discoverer 3.0: [MS Annika 2.0 v1.1.4fix](https://github.com/hgb-bin-proteomics/MSAnnika/releases/tag/v1.1.4fix)
- Proteome Discoverer \<= 2.5: [MS Annika 1.0 v1.0.0](https://github.com/hgb-bin-proteomics/MSAnnika/releases/tag/v1.0.0)

> [!TIP]
>
> Optionally the Bruker Ion Mobility reader can be installed to display ion mobilities in Proteome Discoverer, the node is not needed for crosslink search.

> [!WARNING]
>
> MS Annika only supports MS2 search for MGF files since MGF files don't contain sufficient MS3 information.

> [!WARNING]
>
> Proteome Discoverer \<= 2.5 requires installation of the [IMP MS2 Spectrum Processor](https://ms.imp.ac.at/?action=spectrum-processor) node.
